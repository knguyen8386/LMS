import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/ErrorHandler";

export const ErrorMiddleware = (err:any, req:Request,res:Response,next:NextFunction) =>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal server error';

    //wrong mongodb is error
    if(err.name === 'CastError'){
        const message = `Resource not found. Invalid: ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    //Duplicate key error
    if(err.code === 11000){
        const message = `Duplicate: ${Object.keys(err.keyValues)} entered`;
        err = new ErrorHandler(message, 400);
    }

    //Wrong jwt error
    if(err.code === 'JsonWebTokenError'){
        const message = `Json web token is invalid, try again`;
        err = new ErrorHandler(message, 400);
    }

    //Jwt expried error
    if(err.code === 'TokenExpriedError'){
        const message = `Json web token is expried, try again`;
        err = new ErrorHandler(message, 400);
    }
    
    res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
}
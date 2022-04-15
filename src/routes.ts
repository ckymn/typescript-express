import { Express, Request, Response, NextFunction } from 'express';
import { getBooks, postBooks } from './controller/books.controller'

function routes(app: Express) {
    app.get("/", getBooks)
    app.post("/add", postBooks)
}

export default routes
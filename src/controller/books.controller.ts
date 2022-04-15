import { Request, Response, NextFunction } from 'express'

const getBooks = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).send({
        msg: "success",
    })
}

const postBooks = (req: Request, res: Response) => {
    console.log(req.body)
    return res.status(200).send({
        msg: " add success",
        data: req.body
    })
}

export {
    getBooks,
    postBooks
}
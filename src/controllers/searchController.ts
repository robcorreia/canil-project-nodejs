import { Request, Response } from "express";
import { Pet } from "../models/pet";
import { createMenuObject } from "../helpers/createMenuObject";

export const search = (req: Request, res: Response) => {
  const queryParams: string = req.query.q as string;

  if (!queryParams) {
    res.redirect('/')
    return
  }

  const petList = Pet.getFromName(queryParams)
  res.render('pages/page', {
    menu: createMenuObject(''),
    list: petList,
    queryParams
  })
}
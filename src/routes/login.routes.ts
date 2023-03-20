import { Router } from 'express'
import { createSessionController } from '../controllers/login.controller'
import { verifyLogin } from '../middlewares/verifyLoginData.middleware'


export const loginRoutes = Router()

loginRoutes.post('',verifyLogin, createSessionController)


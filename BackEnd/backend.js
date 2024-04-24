import express from 'express';
import bodyParser  from "body-parser"
import Cors from 'cors'

express.use(Cors())
express.use(bodyParser.urlencoded({extended: true}))
express.use(bodyParser.json())


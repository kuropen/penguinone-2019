import React from 'react';
import App from 'next/app'
import Amplify from 'aws-amplify';
import awsmobile from "../aws-exports";
Amplify.configure(awsmobile);

export default class MyApp extends App {

}
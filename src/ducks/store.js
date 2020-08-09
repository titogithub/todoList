import { createStore, applyMiddleware } from "redux";
import rootReducer from ".";
import { createLogger } from 'redux-logger';

const logger = createLogger();

export default createStore(rootReducer, 
                            undefined, 
                            applyMiddleware(logger)
                            )

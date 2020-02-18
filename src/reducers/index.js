import {combineReducers} from 'redux';
import kimlikdogrulamaReducers from './KimlikdogrulamaReducers';
import StudentsListReducers from './StudentsCreateReducer';
import StudentsDataReducers from './StudentsDataReducers';
import StudentUpdateReducers from './StudentUpdateReducers';
export default combineReducers({
  kimlikdogrulamaResponse: kimlikdogrulamaReducers,
  studentsListResponse: StudentsListReducers,
  studentDataResponse: StudentsDataReducers,
  studentUpdateResponse: StudentUpdateReducers,
});

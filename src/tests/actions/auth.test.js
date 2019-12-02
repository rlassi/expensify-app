import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { login, logout } from '../../actions/auth';

test('should setup login action object', () => {
    const action = login('uid')
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'uid'
    })
})

test('should setup logout action object', () => {
    const action = logout('uid')
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})
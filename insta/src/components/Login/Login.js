import React from 'react';

const Login = () => {
    const onChange = e => {
        localStorage.setItem(e.target.name, e.target.value); 
    }
    const onSubmit = e => {
       
        e.preventDefault();
        if(localStorage.getItem('username') && (localStorage.getItem('password'))){
            localStorage.setItem('loggedIn', 'true')
        } 
        window.location.reload('false')
    }
    
    return(
    <div>
        <form onSubmit={e => onSubmit(e)}>
    
            <input 
                type='text'
                name='username'
                placeholder='username'
                onChange={onChange}
            />
            <input 
                type='text'
                name='password'
                placeholder='password'
                onChange={onChange}
            />
        <button>Login In </button>
        </form>
    </div>
    )
}

export default Login; 
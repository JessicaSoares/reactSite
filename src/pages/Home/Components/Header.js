import React from 'react';


function Header(){
return (
    <header className = 'header'>
    <div className = 'toolbar' >
    <div>
       <a href='/'> Conecta dev- Alteração </a>
    </div>
    <div>
    <button>Novo post </button>
        <span>img1</span>
        <span>img2 - a alteração</span>
        </div>
    </div>
    </header>
    );
}
export default Header;
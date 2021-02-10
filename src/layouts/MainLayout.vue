<template>
    <div class="container">
         <header class="header">
            <div class="header__wrapper">
                <div class="header__left">
                    <div class="header__logo">
                        <img class="logo" src="../assets/img/logo.png" alt="icon">
                   
                    </div> 
                    <div class="header__title">
                        - Blog
                    </div>
                </div>
                <div class="header__right">
                <nav class="header__menu menu">
                    <ul class="menu__items">
                        <li class="menu__item">Вход</li>
                        <li class="menu__item">Регистрация</li>
                    </ul>
                </nav>
                </div>
            </div>
        </header>
         <router-view />
</div>
</template>
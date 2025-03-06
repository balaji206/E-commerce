import React from "react";
import { NavLink,Routes,Route } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { text } from "express";

const Nav=()=>{
    return(
        <nav className="flex justify-evenly">
        <NavLink to={'/'} className={isActive?'text-red-500':'text-blue-500'}>
            Home
        </NavLink>
        <NavLink to='/'>
            Profile
        </NavLink>
        <NavLink to={'/'}>{/*wishlist*/}
            <FaHeart />
        </NavLink>
        <NavLink to={'/cart'}>
            <CiShoppingCart />
        </NavLink>
        </nav>
    )
}
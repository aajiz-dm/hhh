import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
<>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href='#'> <Link to={'/'}> <pre> T    D <br /><sup> TotallyDigitally</sup></pre></Link></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#"><Link to={'/'}>Home</Link></a>
        <a class="nav-link" href="#"><Link to={'/about'}>  About </Link></a>
        <a class="nav-link" href="#"><Link to={'/contact-us'}>Sign/Login</Link></a>
        <a class="nav-link disabled" aria-disabled="true">Discount</a>
      </div>
    </div>
  </div>
</nav>

</>  )
}

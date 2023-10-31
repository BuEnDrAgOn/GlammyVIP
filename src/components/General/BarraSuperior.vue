<template>
    <div id="barrota">
        <b-navbar toggleable="lg" type="dark" class="barrota">
            <b-navbar-brand href="/">Home</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="barrita">
                <b-nav-item href="/trends">Tendencias</b-nav-item>
                <b-nav-item href="#">Perfil</b-nav-item>
                <b-nav-item href="/signUp">Registrarse</b-nav-item>
                <b-nav-item href="/signIn">Iniciar Sesión</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <!-- <b-navbar-nav class="ml-auto">
                <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>

                <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown align="right">
                <template #button-content>
                    <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav> -->
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    props: {

    }
}
</script>

<style>
   .barrita {
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 22px;
    color: black;
} 
 .barrota {
    background-color: rgb(148, 112, 118);
    padding-left: 30px;
}
</style>
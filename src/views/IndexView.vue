<template>
  <div>
    <section class="wrap index-wrap">
        <section id="info">
            <!-- Inicio Banner -->
            <div id="banner" class="text-center">
                <h1>BereNails | Estética</h1>
                <!-- Fin Banner -->
            </div>
            <!-- Inicio de Tarjetas -->
            <div id="cards">

                <div class="card">
                    <a href="Servicios">
                        <i class="fa fa-handshake-o icon"></i>
                        <h2 class="category">Servicios</h2>
                        <p class="description">
                            Tarifas y servicios  
                        </p>
                    </a>
                </div>
                <div class="card">
                    <a href="agendas">
                            <i class="fa fa-calendar icon"></i>
                            <h2 class="category">Citas</h2>
                            <p class="description">
                                Agendar una cita
                            </p>
                    </a>
                </div>
                <div class="card">
                    <a href="agendas.html">
                        <i class="fa fa-shopping-cart icon"></i>
                        <h2 class="category">Productos</h2>
                        <p class="description">
                            Productos disponibles para la venta
                        </p>
                    </a>
                </div>
            </div>
            <!-- Fin de tarjetas -->
        </section>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import url(@/assets/css/font-awesome.min.css);

.index-wrap{
    animation: displayList 1.2s;
}

</style>
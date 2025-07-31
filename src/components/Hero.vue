<template>
    <section id="home" class="bg-gray-200 scroll-mt-20 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-10">
            <!--LEFT CONTENT-->
            <div class="text-center lg:text-left max-w-xl">
                <h1 class="text-4xl sm:text-5xl font-bold text-green-950 leading-tight mb-4 ">
                    Encuentra los mejores autos de Monterrey
                </h1>
                <p class="text-gray-700 text-base sm:text-lg mb-6 ">
                    Descuentos exclusivos y ofertas especiales
                </p>
                <div class="flex justify-left large-justify-start gap-4">
                    <a href="/products" 
                    class="px-6 py-3 bg-slate-500 text-white text-sm font-semibold rounded-lg 
                     hover:bg-blue-600 transition">Compra ahora
                    </a>
                    <a href="/ofertas" 
                    class="px-6 py-3 bg-slate-500 text-white text-sm font-semibold rounded-lg 
                     hover:bg-blue-600 transition">Ofertas
                    </a>
                </div>
            </div>
            <!--RIGHT IMAGENES-->
            <div class="w-full lg:w-4/5 flex justify-center">
                <img src="../assets/HeroTsuru.webp" alt="Hero product" class="w-3/4 lg:w-full max-w-md mx-auto rounded-xl shadow-lg">
            </div>
        </div>
    </section>
</template>
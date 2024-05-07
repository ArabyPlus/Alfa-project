<template>
    <h1 class="text-center mb-10 font-bold text-4xl">{{ $t('Organization Chart') }}</h1>
    <!-- LARGE SCREEN -->
    <div class="main-div hidden lg:block text-center mb-40">
        <h1 class="bg-grey-darken-1 w-fit px-2 py-2 rounded-lg mx-auto text-black font-bold">{{ $t('Owner: ') }} {{
            $t('Mr/ Ahmed Mohamed') }}</h1>
        <div class="manager  flex justify-between items-center mt-10 text-no-wrap">
            <h1 class="bg-grey-darken-1 w-[20%] px-2 py-2 rounded-lg mx-auto text-black font-bold">{{ $t('CEO: ') }} {{
                $t('Mr/ Mohamed Ghanem') }}</h1>
            <h1 class="bg-grey-darken-1 w-[20%] px-2 py-2 rounded-lg mx-auto text-black font-bold">{{ $t('CEO: ') }} {{
                $t('Mr/ Mostafa Mahmoud') }}</h1>
            <h1 class="bg-grey-darken-1 w-[20%] px-2 py-2 rounded-lg mx-auto text-black font-bold">{{ $t('CEO: ') }} {{
                $t('Mr/ Samir Mosaad') }}</h1>
            <h1 class="bg-grey-darken-1 w-[20%] px-2 py-2 rounded-lg mx-auto text-black font-bold">{{ $t('CEO: ') }} {{
                $t('Mr/ Abdallah Adel') }}</h1>
        </div>
        <div class="employees flex justify-between  mt-10">
            <h1 class="bg-grey-darken-1 w-[10%] text-center px-2 py-2 rounded-lg mx-auto text-black font-bold">{{
                $t('HR: ') }} {{
                    $t('Mr/ Mohamed Ghanem') }}</h1>
            <h1 class="bg-grey-darken-1 w-[10%] text-center px-2 py-2 rounded-lg mx-auto text-black font-bold">{{
                $t('HR: ') }} {{
                    $t('Mr/ Mostafa Mahmoud') }}</h1>
            <h1 class="bg-grey-darken-1 w-[10%] text-center px-2 py-2 rounded-lg mx-auto text-black font-bold">{{
                $t('HR: ') }} {{
                    $t('Mr/ Samir Mosaad') }}</h1>
            <h1 class="bg-grey-darken-1 w-[10%] text-center px-2 py-2 rounded-lg mx-auto text-black font-bold">{{
                $t('HR: ') }} {{
                    $t('Mr/ Abdallah Adel') }}</h1>
            <h1 class="bg-grey-darken-1 w-[10%] text-center px-2 py-2 rounded-lg mx-auto text-black font-bold">{{
                $t('HR: ') }} {{
                    $t('Mr/ Mohamed Ghanem') }}</h1>
            <h1 class="bg-grey-darken-1 w-[10%] text-center px-2 py-2 rounded-lg mx-auto text-black font-bold">{{
                $t('HR: ') }} {{
                    $t('Mr/ Mostafa Mahmoud') }}</h1>
            <h1 class="bg-grey-darken-1 w-[10%] text-center px-2 py-2 rounded-lg mx-auto text-black font-bold">{{
                $t('HR: ') }} {{
                    $t('Mr/ Samir Mosaad') }}</h1>
            <h1 class="bg-grey-darken-1 w-[10%] text-center px-2 py-2 rounded-lg mx-auto text-black font-bold">{{
                $t('HR: ') }} {{
                    $t('Mr/ Abdallah Adel') }}</h1>
        </div>
        <div class="employees flex justify-between  mt-10">
            <h1 class="bg-grey-darken-1 w-[10%] text-center px-2 py-2 rounded-lg mx-auto text-black font-bold">{{
                $t('Employee: ') }} {{
                    $t('Mr/ Mohamed Ghanem') }}</h1>
            <h1 class="bg-grey-darken-1 w-[10%] text-center px-2 py-2 rounded-lg mx-auto text-black font-bold">{{
                $t('Employee: ') }} {{
                    $t('Mr/ Mostafa Mahmoud') }}</h1>
            <h1 class="bg-grey-darken-1 w-[10%] text-center px-2 py-2 rounded-lg mx-auto text-black font-bold">{{
                $t('Employee: ') }} {{
                    $t('Mr/ Samir Mosaad') }}</h1>
            <h1 class="bg-grey-darken-1 w-[10%] text-center px-2 py-2 rounded-lg mx-auto text-black font-bold">{{
                $t('Employee: ') }} {{
                    $t('Mr/ Abdallah Adel') }}</h1>
            <h1 class="bg-grey-darken-1 w-[10%] text-center px-2 py-2 rounded-lg mx-auto text-black font-bold">{{
                $t('Employee: ') }} {{
                    $t('Mr/ Mohamed Ghanem') }}</h1>
            <h1 class="bg-grey-darken-1 w-[10%] text-center px-2 py-2 rounded-lg mx-auto text-black font-bold">{{
                $t('Employee: ') }} {{
                    $t('Mr/ Mostafa Mahmoud') }}</h1>
            <h1 class="bg-grey-darken-1 w-[10%] text-center px-2 py-2 rounded-lg mx-auto text-black font-bold">{{
                $t('Employee: ') }} {{
                    $t('Mr/ Samir Mosaad') }}</h1>
            <h1 class="bg-grey-darken-1 w-[10%] text-center px-2 py-2 rounded-lg mx-auto text-black font-bold">{{
                $t('Employee: ') }} {{
                    $t('Mr/ Abdallah Adel') }}</h1>
        </div>
    </div>
    <!-- SMALL SCREEN -->
    <div class="main-div text-center lg:hidden mb-40">
        <h1 class="bg-grey-darken-1 w-fit px-2 py-2 rounded-lg mx-auto text-black font-bold">{{ $t('Owner: ') }} {{
            $t('Mr/ Ahmed Mohamed') }}</h1>

       <div class="flex flex-col md:flex-row lg:hidden  justify-center gap-4"> 
        <div class="manager bg-grey-darken-1 w-[70%] md:w-[25%] mx-auto flex flex-col gap-2text-center rounded-lg py-2 px-2 mt-10">
            <h1 class="text-center mb-2">{{ $t('Executive managers') }}
            </h1>
            <h1 class="bg-grey-darken-1   text-black font-bold">{{ $t('CEO: ') }} {{
                $t('Mr/ Mohamed Ghanem') }}</h1>
            <h1 class="bg-grey-darken-1   text-black font-bold">{{ $t('CEO: ') }} {{
                $t('Mr/ Mostafa Mahmoud') }}</h1>
            <h1 class="bg-grey-darken-1   text-black font-bold">{{ $t('CEO: ') }} {{
                $t('Mr/ Samir Mosaad') }}</h1>
            <h1 class="bg-grey-darken-1   text-black font-bold">{{ $t('CEO: ') }} {{
                $t('Mr/ Abdallah Adel') }}</h1>
        </div>
        <div class="manager bg-grey-darken-1 w-[70%] md:w-[25%] mx-auto flex flex-col gap-2text-center rounded-lg py-2 px-2 mt-10">
            <h1 class="text-center mb-2">{{ $t('HR Staff') }}
            </h1>
            <h1 class="bg-grey-darken-1   text-black font-bold">{{ $t('HR: ') }} {{
                $t('Mr/ Mohamed Ghanem') }}</h1>
            <h1 class="bg-grey-darken-1   text-black font-bold">{{ $t('HR: ') }} {{
                $t('Mr/ Mostafa Mahmoud') }}</h1>
            <h1 class="bg-grey-darken-1   text-black font-bold">{{ $t('HR: ') }} {{
                $t('Mr/ Samir Mosaad') }}</h1>
            <h1 class="bg-grey-darken-1   text-black font-bold">{{ $t('HR: ') }} {{
                $t('Mr/ Abdallah Adel') }}</h1>
            <h1 class="bg-grey-darken-1   text-black font-bold">{{ $t('HR: ') }} {{
                $t('Mr/ Mohamed Ghanem') }}</h1>
            <h1 class="bg-grey-darken-1   text-black font-bold">{{ $t('HR: ') }} {{
                $t('Mr/ Mostafa Mahmoud') }}</h1>
            <h1 class="bg-grey-darken-1   text-black font-bold">{{ $t('HR: ') }} {{
                $t('Mr/ Samir Mosaad') }}</h1>
            <h1 class="bg-grey-darken-1   text-black font-bold">{{ $t('HR: ') }} {{
                $t('Mr/ Abdallah Adel') }}</h1>
        </div>
        <div class="manager bg-grey-darken-1 w-[70%] md:w-[25%] mx-auto flex flex-col gap-2text-center rounded-lg py-2 px-2 mt-10">
            <h1 class="text-center mb-2">{{ $t('Employees') }}
            </h1>
            <h1 class="bg-grey-darken-1   text-black font-bold">{{ $t('Employee: ') }} {{
                $t('Mr/ Mohamed Ghanem') }}</h1>
            <h1 class="bg-grey-darken-1   text-black font-bold">{{ $t('Employee: ') }} {{
                $t('Mr/ Mostafa Mahmoud') }}</h1>
            <h1 class="bg-grey-darken-1   text-black font-bold">{{ $t('Employee: ') }} {{
                $t('Mr/ Samir Mosaad') }}</h1>
            <h1 class="bg-grey-darken-1   text-black font-bold">{{ $t('Employee: ') }} {{
                $t('Mr/ Abdallah Adel') }}</h1>
            <h1 class="bg-grey-darken-1   text-black font-bold">{{ $t('Employee: ') }} {{
                $t('Mr/ Mohamed Ghanem') }}</h1>
            <h1 class="bg-grey-darken-1   text-black font-bold">{{ $t('Employee: ') }} {{
                $t('Mr/ Mostafa Mahmoud') }}</h1>
            <h1 class="bg-grey-darken-1   text-black font-bold">{{ $t('Employee: ') }} {{
                $t('Mr/ Samir Mosaad') }}</h1>
            <h1 class="bg-grey-darken-1   text-black font-bold">{{ $t('Employee: ') }} {{
                $t('Mr/ Abdallah Adel') }}</h1>
        </div></div>

    </div>
</template>

<script setup>

</script>
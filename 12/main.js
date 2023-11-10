//main.js: Основной файл, который связывает все модули вместе.

import { fetchData } from './apiService.js';
import { createCard } from './cardCreator.js';
import { clearInfo } from './clearInfoModule.js';

const peopleBtn = document.getElementById("peopleBtn"),
planetsBtn = document.getElementById("planetsBtn"),
filmBtn = document.getElementById("filmBtn"),
speciesBtn = document.getElementById("speciesBtn"),
vehiclesBtn = document.getElementById("vehiclesBtn"),
starshipsBtn = document.getElementById("starshipsBtn");

const loader = document.querySelector(".loader");

peopleBtn.addEventListener('click', async () => {
    clearInfo();
    loader.classList.add("show");
    try {
        
        const data = await fetchData("https://swapi.dev/api/people/");
        const properties = [
            { label: 'Name', key: 'name' },
            { label: 'Height', key: 'height' },
            { label: 'Mass', key: 'mass' },
            { label: 'Birth Year', key: 'birth_year' },
            { label: 'Gender', key: 'gender' },
        ];
        data.forEach(item => createCard(item, properties));
        
        
        /* setTimeout(() => { */
            loader.classList.remove("show");
        /* }, 1000); */

    } catch (error) {
        console.error('Error fetching people data:', error);
    }
});

planetsBtn.addEventListener('click', async () => {
    clearInfo();
    loader.classList.add("show");
    try {
        const data = await fetchData("https://swapi.dev/api/planets/");
        const properties = [
            { label: 'Name', key: 'name' },
        { label: 'Rotation Period', key: 'rotation_period' },
        { label: 'Orbital Period', key: 'orbital_period' },
        { label: 'Diameter', key: 'diameter' },
        { label: 'Climate', key: 'climate' },
        { label: 'Gravity', key: 'gravity' },
        ];
        data.forEach(item => createCard(item, properties));
        loader.classList.remove("show");
    } catch (error) {
        console.error('Error fetching planets data:', error);
    }
});

filmBtn.addEventListener('click', async () => {
    clearInfo();
    loader.classList.add("show");
    try {
        const data = await fetchData("https://swapi.dev/api/films/");
        const properties = [
            { label: 'Title', key: 'title' },
            { label: 'Episode Number', key: 'episode_id' },
            { label: 'Opening Crawl', key: 'opening_crawl' },
            { label: 'Director', key: 'director' },
            { label: 'Producer', key: 'producer' },
            { label: 'Release Date', key: 'release_date' },
        ];
        data.forEach(item => createCard(item, properties));
        loader.classList.remove("show");
    } catch (error) {
        console.error('Error fetching films data:', error);
    }
});
speciesBtn.addEventListener('click', async () => {
    clearInfo();
    loader.classList.add("show");
    try {
        const data = await fetchData("https://swapi.dev/api/species/");
        const properties = [
            { label: 'Name', key: 'name' },
            { label: 'Classification', key: 'classification' },
            { label: 'Designation', key: 'designation' },
            { label: 'Language', key: 'language' },
            { label: 'Lifespan', key: 'average_lifespan' },
        ];
        data.forEach(item => createCard(item, properties));
        loader.classList.remove("show");
    } catch (error) {
        console.error('Error fetching species data:', error);
    }
});

vehiclesBtn.addEventListener('click', async () => {
    clearInfo();
    loader.classList.add("show");
    try {
        const data = await fetchData("https://swapi.dev/api/vehicles/");
        const properties = [
            { label: 'Name', key: 'name' },
            { label: 'Model', key: 'model' },
            { label: 'Manufacturer', key: 'manufacturer' },
            { label: 'Cost in Credits', key: 'cost_in_credits' },
            { label: 'Passengers', key: 'passengers' },
        ];
        data.forEach(item => createCard(item, properties));
        loader.classList.remove("show");
    } catch (error) {
        console.error('Error fetching vehicles data:', error);
    }
});

starshipsBtn.addEventListener('click', async () => {
    clearInfo();
    loader.classList.add("show");
    try {
        const data = await fetchData("https://swapi.dev/api/starships/");
        const properties = [
            { label: 'Name', key: 'name' },
            { label: 'Model', key: 'model' },
            { label: 'Manufacturer', key: 'manufacturer' },
            { label: 'Cost in Credits', key: 'cost_in_credits' },
            { label: 'Passengers', key: 'passengers' },
        ];
        data.forEach(item => createCard(item, properties));
        loader.classList.remove("show");
    } catch (error) {
        console.error('Error fetching starships data:', error);
    }
});
/**
 * Enhanced Learning Modules with Real Imagery
 * 10 Comprehensive Geology Modules + 2 NEW modules
 */

const ENHANCED_MODULES = [
    {
        id: 'geologic-time',
        title: 'Geologic Time Scale',
        emoji: '⏰',
        color: '#E74C3C',
        description: 'Understand Earth\'s 4.6 billion year history',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Shmoop_Geologic_Time_Scale.svg/800px-Shmoop_Geologic_Time_Scale.svg.png',
        lessons: [
            {
                title: 'Eons and Eras',
                content: 'Earth\'s history divided into major time periods',
                image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Geological_Time_Scale.jpg'
            },
            {
                title: 'Precambrian Time',
                content: 'The first 4 billion years of Earth\'s history',
                image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Archaean_Eon.jpg'
            },
            {
                title: 'Paleozoic Era',
                content: 'Ancient life flourishes in oceans and land',
                image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Paleozoic_life.jpg'
            }
        ],
        flashcardLayout: 'timeline'
    },
    {
        id: 'petrology',
        title: 'Petrology (Rocks)',
        emoji: '🔥',
        color: '#E67E22',
        description: 'Learn about igneous, sedimentary, and metamorphic rocks',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Granite_-_Diorite_-_Gabbro.jpg/800px-Granite_-_Diorite_-_Gabbro.jpg',
        lessons: [
            {
                title: 'Igneous Rocks',
                content: 'Rocks formed from molten magma - granite, basalt, obsidian',
                image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Granite.jpg'
            },
            {
                title: 'Sedimentary Rocks',
                content: 'Rocks formed from compacted sediment - sandstone, limestone, shale',
                image: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Sandstone_formation.jpg'
            },
            {
                title: 'Metamorphic Rocks',
                content: 'Rocks changed by heat and pressure - marble, slate, schist',
                image: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Marble.jpg'
            }
        ],
        flashcardLayout: 'rock-samples'
    },
    {
        id: 'mineralogy',
        title: 'Mineralogy',
        emoji: '✨',
        color: '#3498DB',
        description: 'Explore 5,000+ known minerals and their properties',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Quartz_mineral.jpg/800px-Quartz_mineral.jpg',
        lessons: [
            {
                title: 'Crystal Systems',
                content: 'Geometric arrangement of atoms in minerals',
                image: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Crystal_system.jpg'
            },
            {
                title: 'Mineral Properties',
                content: 'Hardness, luster, color, streak, and cleavage',
                image: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Quartz.jpg'
            },
            {
                title: 'Common Minerals',
                content: 'Quartz, feldspar, mica, calcite, and more',
                image: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Quartz_Specimen.jpg'
            }
        ],
        flashcardLayout: 'crystal-grid'
    },
    {
        id: 'rock-cycle',
        title: 'Rock Cycle',
        emoji: '♻️',
        color: '#27AE60',
        description: 'Follow rocks through their endless transformation',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/RockCycle.jpg',
        lessons: [
            {
                title: 'Igneous to Weathering',
                content: 'Rocks exposed to surface weathering and erosion',
                image: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Weathering_process.jpg'
            },
            {
                title: 'Sedimentation',
                content: 'Eroded material transported and deposited',
                image: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Sediment_deposition.jpg'
            },
            {
                title: 'Lithification to Metamorphism',
                content: 'Sediment compacts into rock, then transforms',
                image: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Metamorphic_process.jpg'
            }
        ],
        flashcardLayout: 'process-flow'
    },
    {
        id: 'sedimentation',
        title: 'Sedimentation & Stratigraphy',
        emoji: '🏜️',
        color: '#D4AF37',
        description: 'Discover how layers tell Earth\'s story',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Geological_strata.jpg',
        lessons: [
            {
                title: 'Sedimentary Processes',
                content: 'Weathering, erosion, transport, and deposition',
                image: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Sedimentary_layers.jpg'
            },
            {
                title: 'Stratification',
                content: 'Layers of rock record environmental history',
                image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Stratum.jpg'
            },
            {
                title: 'Fossilization',
                content: 'Organic remains preserved in sedimentary rocks',
                image: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Fossil_example.jpg'
            }
        ],
        flashcardLayout: 'layered-cards'
    },
    {
        id: 'volcanology',
        title: 'Volcanology',
        emoji: '🌋',
        color: '#C0392B',
        description: 'Understand volcanic processes and eruptions',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Volcano.jpg',
        lessons: [
            {
                title: 'Magma Composition',
                content: 'Basaltic, andesitic, and rhyolitic magmas',
                image: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Magma_chamber.jpg'
            },
            {
                title: 'Eruption Types',
                content: 'Effusive, explosive, and pyroclastic eruptions',
                image: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Volcanic_eruption.jpg'
            },
            {
                title: 'Volcanic Landforms',
                content: 'Cones, calderas, and lava flows',
                image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Volcanic_cone.jpg'
            }
        ],
        flashcardLayout: 'cross-section'
    },
    {
        id: 'plate-tectonics',
        title: 'Plate Tectonics',
        emoji: '🌍',
        color: '#2980B9',
        description: 'Learn how Earth\'s crust moves and shapes the planet',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Plate_tectonics_map.jpg',
        lessons: [
            {
                title: 'Plate Boundaries',
                content: 'Divergent, convergent, and transform boundaries',
                image: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Plate_boundaries.jpg'
            },
            {
                title: 'Continental Drift',
                content: 'Pangaea and continental movement over time',
                image: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Pangaea_animation.jpg'
            },
            {
                title: 'Mountain Building',
                content: 'Orogenesis through plate collision and subduction',
                image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Mountain_formation.jpg'
            }
        ],
        flashcardLayout: 'world-map'
    },
    {
        id: 'structural-geology',
        title: 'Structural Geology',
        emoji: '📐',
        color: '#8E44AD',
        description: 'Read the stories written in folded and faulted rocks',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Folded_rocks.jpg',
        lessons: [
            {
                title: 'Folds and Faulting',
                content: 'Anticlines, synclines, and types of faults',
                image: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Fold_fault_diagram.jpg'
            },
            {
                title: 'Stress and Strain',
                content: 'How rocks respond to compressional and tensional forces',
                image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Rock_deformation.jpg'
            },
            {
                title: 'Earthquake Mechanics',
                content: 'Fault rupture, seismic waves, and magnitude',
                image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Earthquake_epicenter.jpg'
            }
        ],
        flashcardLayout: '3d-perspective'
    },
    {
        id: 'hydrogeology',
        title: 'Hydrogeology',
        emoji: '💧',
        color: '#16A085',
        description: 'Water beneath our feet - aquifers, groundwater, and wells',
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Aquifer_diagram.jpg',
        lessons: [
            {
                title: 'Groundwater and Aquifers',
                content: 'Unconfined and confined aquifers, water table dynamics',
                image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Groundwater_table.jpg'
            },
            {
                title: 'Porosity and Permeability',
                content: 'How rocks store and transmit groundwater',
                image: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Porous_rock.jpg'
            },
            {
                title: 'Contaminant Transport',
                content: 'Groundwater contamination and remediation',
                image: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Groundwater_contamination.jpg'
            },
            {
                title: 'Wells and Springs',
                content: 'Water extraction and natural discharge',
                image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Well_drilling.jpg'
            }
        ],
        flashcardLayout: 'aquifer-diagram'
    },
    {
        id: 'physical-geology',
        title: 'Physical Geology',
        emoji: '⛰️',
        color: '#B8A038',
        description: 'Earth\'s processes - weathering, erosion, and surface change',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Erosion_example.jpg',
        lessons: [
            {
                title: 'Weathering Processes',
                content: 'Chemical and mechanical breakdown of rocks',
                image: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Weathering_types.jpg'
            },
            {
                title: 'Mass Wasting',
                content: 'Landslides, rockfalls, and soil creep',
                image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Landslide.jpg'
            },
            {
                title: 'Soil Formation',
                content: 'Horizons, weathering profiles, and soil types',
                image: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Soil_profile.jpg'
            },
            {
                title: 'Glaciation and Coastal Processes',
                content: 'Ice age landforms and wave erosion',
                image: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Glacier_valley.jpg'
            }
        ],
        flashcardLayout: 'process-sequence'
    }
];

class ModuleManager {
    constructor() {
        this.modules = ENHANCED_MODULES;
        this.currentModule = null;
        this.completedModules = JSON.parse(localStorage.getItem('completedModules')) || [];
    }

    getAllModules() {
        return this.modules;
    }

    getModuleById(id) {
        return this.modules.find(m => m.id === id);
    }

    renderModulesGrid(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = this.modules.map(module => `
            <div class="module-card" data-module-id="${module.id}">
                <div class="module-image">
                    <img src="${module.image}" alt="${module.title}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22150%22%3E%3Crect fill=%22%23ccc%22 width=%22200%22 height=%22150%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 text-anchor=%22middle%22 dominant-baseline=%22central%22%3EImage Not Available%3C/text%3E%3C/svg%3E'">
                </div>
                <div class="module-header" style="border-color: ${module.color}">
                    <span class="module-emoji">${module.emoji}</span>
                    <h3>${module.title}</h3>
                </div>
                <p class="module-description">${module.description}</p>
                <div class="module-progress">
                    <span class="progress-indicator ${this.completedModules.includes(module.id) ? 'completed' : ''}">
                        ${this.completedModules.includes(module.id) ? '✓ Completed' : '→ Start Learning'}
                    </span>
                </div>
            </div>
        `).join('');

        // Add click handlers
        container.querySelectorAll('.module-card').forEach(card => {
            card.addEventListener('click', () => {
                const moduleId = card.dataset.moduleId;
                this.loadModule(moduleId);
            });
        });
    }

    loadModule(moduleId) {
        this.currentModule = this.getModuleById(moduleId);
        if (this.currentModule) {
            window.rocky?.celebrate();
            this.displayModuleContent();
        }
    }

    displayModuleContent() {
        const container = document.getElementById('moduleContentContainer');
        if (!container || !this.currentModule) return;

        const module = this.currentModule;
        container.innerHTML = `
            <div class="module-content">
                <div class="module-title-section">
                    <h2>${module.emoji} ${module.title}</h2>
                    <p>${module.description}</p>
                </div>

                <div class="lessons-grid">
                    ${module.lessons.map((lesson, idx) => `
                        <div class="lesson-card">
                            <div class="lesson-number">${idx + 1}</div>
                            <img src="${lesson.image}" alt="${lesson.title}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22%3E%3Crect fill=%22%23ddd%22 width=%22300%22 height=%22200%22/%3E%3C/svg%3E'">
                            <h4>${lesson.title}</h4>
                            <p>${lesson.content}</p>
                        </div>
                    `).join('')}
                </div>

                <div class="module-tips">
                    <h4>💡 Rocky's Tip:</h4>
                    <p>${window.rocky?.getTip(module.title) || 'Keep learning!'}</p>
                </div>

                <button class="btn btn-primary" onclick="moduleManager.markCompleted('${module.id}')">
                    Mark as Completed
                </button>
            </div>
        `;
    }

    markCompleted(moduleId) {
        if (!this.completedModules.includes(moduleId)) {
            this.completedModules.push(moduleId);
            localStorage.setItem('completedModules', JSON.stringify(this.completedModules));
            window.rocky?.celebrate();
            this.displayModuleContent();
        }
    }

    getProgress() {
        return Math.round((this.completedModules.length / this.modules.length) * 100);
    }
}

// Initialize Module Manager
const moduleManager = new ModuleManager();

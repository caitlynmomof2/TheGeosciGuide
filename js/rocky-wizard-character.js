/**
 * Rocky Wizard Character System
 * Whimsical hybrid dinosaur wizard with multiple personalities
 */

class RockyWizard {
    constructor() {
        this.mode = localStorage.getItem('rockyMode') || 'wizard'; // wizard, dino, scholar, fun
        this.expression = 'happy';
        this.level = parseInt(localStorage.getItem('rockyLevel')) || 1;
        this.xp = parseInt(localStorage.getItem('rockyXP')) || 0;
        this.totalClicks = 0;
        this.personality = this.getPersonality();
        this.init();
    }

    init() {
        this.createRockyDOM();
        this.attachEventListeners();
        this.startIdleAnimations();
        this.renderRockyDisplay();
    }

    createRockyDOM() {
        const rockyContainer = document.createElement('div');
        rockyContainer.id = 'rocky-wizard-container';
        rockyContainer.className = 'rocky-wizard-container';
        rockyContainer.innerHTML = `
            <div class="rocky-display">
                <div class="rocky-character">
                    <svg id="rockyCharacter" width="120" height="140" viewBox="0 0 120 140">
                        <!-- Wizard Hat -->
                        <g id="wizard-hat">
                            <polygon points="60,20 40,50 80,50" fill="#4B0082" stroke="#2F0055" stroke-width="2"/>
                            <circle cx="60" cy="25" r="4" fill="#FFD700"/>
                            <ellipse cx="60" cy="51" rx="22" ry="6" fill="#3A006F"/>
                        </g>
                        
                        <!-- Head (Dinosaur) -->
                        <g id="rocky-head">
                            <ellipse cx="60" cy="65" rx="25" ry="28" fill="#8B7355" stroke="#654321" stroke-width="2"/>
                            <!-- Snout -->
                            <ellipse cx="60" cy="75" rx="18" ry="14" fill="#A0826D" stroke="#654321" stroke-width="1"/>
                            <!-- Eyes -->
                            <circle cx="50" cy="55" r="5" fill="#FFD700"/>
                            <circle cx="70" cy="55" r="5" fill="#FFD700"/>
                            <circle cx="50" cy="55" r="2" fill="#000"/>
                            <circle cx="70" cy="55" r="2" fill="#000"/>
                            <!-- Horns (wizard-like) -->
                            <path d="M 45 40 Q 40 30 38 20" stroke="#8B7355" stroke-width="3" fill="none"/>
                            <path d="M 75 40 Q 80 30 82 20" stroke="#8B7355" stroke-width="3" fill="none"/>
                        </g>
                        
                        <!-- Wizard Robe -->
                        <g id="wizard-robe">
                            <ellipse cx="60" cy="100" rx="35" ry="30" fill="#4B0082" stroke="#2F0055" stroke-width="2"/>
                            <!-- Stars on robe -->
                            <g class="robe-stars">
                                <text x="45" y="95" font-size="12">⭐</text>
                                <text x="70" y="100" font-size="12">✨</text>
                                <text x="50" y="110" font-size="12">⭐</text>
                                <text x="75" y="115" font-size="12">✨</text>
                            </g>
                        </g>
                        
                        <!-- Staff -->
                        <g id="wizard-staff">
                            <line x1="85" y1="90" x2="100" y2="50" stroke="#8B4513" stroke-width="3"/>
                            <circle cx="100" cy="45" r="8" fill="#FFD700"/>
                            <circle cx="100" cy="45" r="5" fill="#FFA500"/>
                        </g>
                        
                        <!-- Spell Effect -->
                        <g id="spell-effect" class="spell-animation" opacity="0">
                            <circle cx="100" cy="40" r="3" fill="#FFD700"/>
                            <circle cx="105" cy="35" r="2" fill="#FF69B4"/>
                            <circle cx="95" cy="35" r="2" fill="#00CED1"/>
                        </g>
                    </svg>
                </div>
                
                <div class="rocky-info">
                    <h3>Rocky Level <span id="rockyLvl">${this.level}</span></h3>
                    <div class="rocky-xp-bar">
                        <div class="rocky-xp-fill" style="width: ${(this.xp % 100)}%"></div>
                    </div>
                    <p class="rocky-xp-text" id="rockyXP">${this.xp % 100}% to next level</p>
                </div>
            </div>
            
            <div class="rocky-speech-bubble">
                <p id="rockySpeech"></p>
                <div class="bubble-tail"></div>
            </div>
            
            <div class="rocky-modes">
                <button class="mode-btn ${this.mode === 'wizard' ? 'active' : ''}" data-mode="wizard" title="Mystical wizard mode">🧙‍♂️</button>
                <button class="mode-btn ${this.mode === 'dino' ? 'active' : ''}" data-mode="dino" title="Prehistoric dino mode">🦕</button>
                <button class="mode-btn ${this.mode === 'scholar' ? 'active' : ''}" data-mode="scholar" title="Scholarly scientist">📚</button>
                <button class="mode-btn ${this.mode === 'fun' ? 'active' : ''}" data-mode="fun" title="Fun and jokes">😄</button>
            </div>
        `;

        // Insert after header
        const header = document.querySelector('.app-header');
        if (header) {
            header.parentNode.insertBefore(rockyContainer, header.nextSibling);
        }
    }

    attachEventListeners() {
        // Mode switching
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchMode(e.target.dataset.mode);
            });
        });

        // Click on Rocky for interaction
        document.getElementById('rockyCharacter').addEventListener('click', () => {
            this.interact();
        });

        // Background interactions
        document.addEventListener('click', () => {
            this.totalClicks++;
            if (this.totalClicks % 10 === 0) {
                this.gainXP(1);
            }
        });
    }

    switchMode(mode) {
        this.mode = mode;
        localStorage.setItem('rockyMode', mode);
        
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-mode="${mode}"]`).classList.add('active');
        
        this.personality = this.getPersonality();
        this.speak(this.personality.greetings[Math.floor(Math.random() * this.personality.greetings.length)]);
        this.animateExpression('excited');
    }

    getPersonality() {
        const personalities = {
            wizard: {
                name: 'Wizard Mode',
                greetings: [
                    '✨ Abracadabra! Ready to learn some geological magic?',
                    '🔮 The crystal ball shows great learning ahead!',
                    '⚡ My spell of enlightenment is ready!',
                    '🌟 The ancient stones call to us! Let\'s learn!'
                ],
                tips: [
                    '✨ Pro tip: Igneous rocks form from magical molten magic!',
                    '🔮 Crystal healing - I mean, crystal structures are fascinating!',
                    '⚡ Volcanic alchemy creates the most wondrous rocks!'
                ],
                encouragement: [
                    '✨ Spectacular spell-casting in geology!',
                    '🔮 Your understanding of the elemental earth is growing!',
                    '⚡ Magnificent mastery of geological sorcery!'
                ]
            },
            dino: {
                name: 'Dino Mode',
                greetings: [
                    '🦕 ROAAARRR! I lived through the best rock formations!',
                    '🌍 Back in my day, we had REAL tectonic action!',
                    '💎 I\'ve seen rocks form from the age of dinosaurs!',
                    '🦖 Evolution, geology, and extinction - I know it all!'
                ],
                tips: [
                    '🦕 Fun fact: I\'ve seen the Cretaceous-Paleogene extinction event!',
                    '🌍 Dinosaur bones are now fossils in sedimentary rock!',
                    '💎 Amber with insects? That\'s NOTHING compared to fossilized dinosaurs!'
                ],
                encouragement: [
                    '🦕 ROOOAR! You\'re crushing it!',
                    '🌍 Extinction-level learning performance!',
                    '💎 Meteorite-grade studying!'
                ]
            },
            scholar: {
                name: 'Scholar Mode',
                greetings: [
                    '📚 Welcome! Let us engage in rigorous geological study.',
                    '🔬 The empirical analysis of Earth\'s systems beckons.',
                    '📖 Shall we explore the stratification and mineralization?',
                    '🎓 Academic excellence in geology awaits.'
                ],
                tips: [
                    '📚 Peer-reviewed research indicates crystalline structure analysis is essential.',
                    '🔬 According to the Mohs hardness scale...',
                    '📖 Stratigraphic correlation requires methodical analysis.'
                ],
                encouragement: [
                    '📚 Exemplary academic performance.',
                    '🔬 Your understanding demonstrates impressive erudition.',
                    '🎓 Publishing-quality geological knowledge!'
                ]
            },
            fun: {
                name: 'Fun Mode',
                greetings: [
                    '😄 Why did the geologist go to the bar? For the rocks! 🪨',
                    '😄 Time flies when you\'re having GNEISS! (get it? Gneiss rock?)',
                    '😄 Ready to have an earth-shattering good time? 🌍',
                    '😄 Shall we explore some PHYLL-ING caves? (I\'m on schist-roll!)'
                ],
                tips: [
                    '😄 Did you know? Rocks are SEDIMENTARY, my dear Watson! 🔍',
                    '😄 Why do geologists love pizza? Because it comes in GRANITE boxes! 🍕',
                    '😄 What\'s a geologist\'s favorite type of music? ROCK! 🎸'
                ],
                encouragement: [
                    '😄 You\'re absolutely GNEISS!',
                    '😄 That\'s SCHIST-mazing!',
                    '😄 You\'re reaching PEAK performance! ⛰️'
                ]
            }
        };
        return personalities[this.mode];
    }

    speak(message) {
        const speechBubble = document.getElementById('rockySpeech');
        if (speechBubble) {
            speechBubble.textContent = message;
            speechBubble.parentElement.style.opacity = '1';
            
            setTimeout(() => {
                speechBubble.parentElement.style.opacity = '0';
            }, 4000);
        }
    }

    animateExpression(expression) {
        this.expression = expression;
        const character = document.getElementById('rockyCharacter');
        
        const expressions = {
            happy: 'scaleY(1.05)',
            thinking: 'rotate(5deg)',
            excited: 'scale(1.1)',
            teaching: 'scaleX(1.05)'
        };
        
        character.style.transform = expressions[expression] || 'none';
        character.style.transition = 'transform 0.3s ease-out';
        
        setTimeout(() => {
            character.style.transform = 'none';
        }, 300);
    }

    castSpell() {
        const spellEffect = document.getElementById('spell-effect');
        spellEffect.style.animation = 'spell-burst 0.6s ease-out';
        
        setTimeout(() => {
            spellEffect.style.animation = 'none';
        }, 600);
    }

    interact() {
        this.castSpell();
        this.animateExpression('excited');
        
        const randomGreeting = this.personality.greetings[
            Math.floor(Math.random() * this.personality.greetings.length)
        ];
        this.speak(randomGreeting);
        
        this.gainXP(5);
    }

    gainXP(amount) {
        this.xp += amount;
        
        if (this.xp >= 100) {
            this.levelUp();
        }
        
        localStorage.setItem('rockyXP', this.xp);
        this.renderRockyDisplay();
    }

    levelUp() {
        this.level++;
        this.xp = 0;
        localStorage.setItem('rockyLevel', this.level);
        
        this.speak(`🎉 Level ${this.level}! Amazing progress!`);
        this.animateExpression('excited');
        this.castSpell();
    }

    renderRockyDisplay() {
        const lvlElement = document.getElementById('rockyLvl');
        const xpElement = document.getElementById('rockyXP');
        const xpFill = document.querySelector('.rocky-xp-fill');
        
        if (lvlElement) lvlElement.textContent = this.level;
        if (xpElement) xpElement.textContent = `${this.xp % 100}% to next level`;
        if (xpFill) xpFill.style.width = `${(this.xp % 100)}%`;
    }

    startIdleAnimations() {
        setInterval(() => {
            if (Math.random() > 0.7) {
                this.animateExpression('thinking');
            }
        }, 8000);
    }

    getTip(moduleName) {
        const tips = this.personality.tips;
        return tips[Math.floor(Math.random() * tips.length)];
    }

    celebrate() {
        this.animateExpression('excited');
        this.castSpell();
        const encouragement = this.personality.encouragement[
            Math.floor(Math.random() * this.personality.encouragement.length)
        ];
        this.speak(encouragement);
    }
}

// Initialize Rocky when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.rocky = new RockyWizard();
});

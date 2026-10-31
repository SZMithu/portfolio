import { useEffect} from 'react';
import VanillaTilt from 'vanilla-tilt';


export default function useCardTiltEffect() {
  useEffect(() => {
  const cards = document.querySelectorAll<HTMLElement>('.card');
  cards.forEach((card) => {
    VanillaTilt.init(card, {
        max: 15,          // Max tilt angle (degrees) [12]
        speed: 400,     // Transition speed [1]
        glare: true,      // Add glare effect
        "max-glare": 0.5, // Max glare opacity [12]
        

        });
    });
  }, []);
}

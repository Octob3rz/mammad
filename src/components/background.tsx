
import { useState, useEffect } from 'react'

export default function Background() {
  const [hoveredCell, setHoveredCell] = useState<number | null>(null)
  const [visibleCells, setVisibleCells] = useState<number[]>([])

  // Effect to create an initial pattern of visible cells
  useEffect(() => {
    // Create an initial set of visible cells (about 50% of the grid)
    const initialCells: number[] = []
    const totalCells = Math.floor((window.innerWidth * window.innerHeight) / (32 * 32))
    const visibleCount = Math.floor(totalCells * 0.5) // Increase to 50% coverage
    
    // Create mathematically connected patterns
    // Start with some seed points
    const seedPoints = [
      Math.floor(Math.random() * totalCells),
      Math.floor(Math.random() * totalCells),
      Math.floor(Math.random() * totalCells)
    ]
    
    const gridCols = Math.ceil(window.innerWidth / 32)
    const processedCells = new Set<number>()
    
    // Generate cellular automaton-like pattern
    seedPoints.forEach(seed => {
      let frontier = [seed]
      processedCells.add(seed)
      initialCells.push(seed)
      
      // Generate a connected pattern from each seed
      while (frontier.length > 0 && initialCells.length < visibleCount) {
        const current = frontier.shift()!
        const neighbors = [
          current - gridCols - 1, current - gridCols, current - gridCols + 1,
          current - 1, current + 1,
          current + gridCols - 1, current + gridCols, current + gridCols + 1
        ].filter(n => n >= 0 && n < totalCells)
        
        for (const neighbor of neighbors) {
          if (!processedCells.has(neighbor) && Math.random() > 0.35) { // Higher probability to create connections
            processedCells.add(neighbor)
            initialCells.push(neighbor)
            frontier.push(neighbor)
            
            // Limit the growth to avoid overprocessing
            if (initialCells.length >= visibleCount) break
          }
        }
      }
    })
    
    setVisibleCells(initialCells)
  }, [])

  // Calculate grid dimensions based on viewport
  const gridCols = Math.ceil(window.innerWidth / 32)
  const gridRows = Math.ceil((window.innerHeight * 1.5) / 32) // Extend beyond viewport height
  const totalCells = gridCols * gridRows

  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-[-1]"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${gridCols}, 32px)`,
        gridTemplateRows: `repeat(${gridRows}, 32px)`,
        overflow: 'hidden',
        backgroundColor: '#f8f8f8',
      }}
    >
      {[...Array(totalCells)].map((_, i) => (
        <Cell 
          key={i} 
          index={i} 
          isActive={visibleCells.includes(i)} 
          isHovered={hoveredCell === i}
          onHover={(index) => {
            setHoveredCell(index)
            
            // Add neighboring cells to visible cells when hovering
            if (!visibleCells.includes(index)) {
              const neighbors = [
                index - gridCols - 1, index - gridCols, index - gridCols + 1,
                index - 1, index + 1,
                index + gridCols - 1, index + gridCols, index + gridCols + 1
              ]
              
              // Randomly select some neighbors to activate
              const selectedNeighbors = neighbors.filter(() => Math.random() > 0.5)
              setVisibleCells(prev => [...prev, index, ...selectedNeighbors])
            }
          }}
        />
      ))}
    </div>
  )
}

interface CellProps {
  index: number
  isActive: boolean
  isHovered: boolean
  onHover: (index: number) => void
}

function Cell({ index, isActive, isHovered, onHover }: CellProps) {
  const getRandomColor = () => {
    // Use only black and gray colors
    const monochromeColors = [
      '#222222', // Dark gray
      '#444444', // Medium gray
      '#666666', // Gray
      '#000000', // Black
    ]
    return monochromeColors[Math.floor(Math.random() * monochromeColors.length)]
  }
  const [color] = useState(getRandomColor())

  return (
    <div
      onMouseEnter={() => onHover(index)}
      className="transition-all duration-500 ease-in-out"
      style={{
        background: isActive || isHovered ? `${color}10` : 'transparent',
        border: isActive || isHovered 
          ? `solid 1px ${color}` 
          : 'solid 0px transparent',
        opacity: isActive ? 0.6 : isHovered ? 0.8 : 0,
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      }}
    />
  )
}

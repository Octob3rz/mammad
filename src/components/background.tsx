
import { useState, useEffect } from 'react'

const COLORS = ['hsl(267, 75%, 50%)', 'hsl(267, 75%, 35%)', 'hsl(84, 59%, 65%)', 'hsl(84, 39%, 55%)']

export default function Background() {
  const [hoveredCell, setHoveredCell] = useState<number | null>(null)
  const [visibleCells, setVisibleCells] = useState<number[]>([])

  // Effect to create an initial pattern of visible cells
  useEffect(() => {
    // Create an initial set of visible cells (about 5% of the grid)
    const initialCells: number[] = []
    const totalCells = Math.floor((window.innerWidth * window.innerHeight) / (32 * 32))
    const visibleCount = Math.floor(totalCells * 0.02)
    
    for (let i = 0; i < visibleCount; i++) {
      const randomCell = Math.floor(Math.random() * totalCells)
      initialCells.push(randomCell)
    }
    
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
  const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)]
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
        opacity: isActive ? 0.8 : isHovered ? 1 : 0,
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
      }}
    />
  )
}

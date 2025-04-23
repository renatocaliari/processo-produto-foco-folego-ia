# Chapter 3: `StageCard` Component

In the [previous chapter](02__processsection__component_.md), we learned about the `ProcessSection` component. It acts like a manager for a whole section of our product process exhibition, like the "Mapeamento de Oportunidades" booth. It displays the section title and, when expanded, shows all the individual steps belonging to that section.

But how is each *individual step* displayed? If `ProcessSection` is the booth manager, what actually displays the information for a single activity, like "Analisar Mercado" or "Definir Persona"?

That's the job of the `StageCard` component!

## Meet the Display Panel

Think back to our exhibition hall analogy. `ProductProcess` is the hall director, `ProcessSection` is the manager of a specific booth. The `StageCard` component is like **a single display panel or poster** inside that booth.

*   **Focus on One Thing:** Each `StageCard` is only responsible for displaying the information for *one specific step* (or "stage") in the process.
*   **Gets Specific Content:** The `ProcessSection` (booth manager) gives the `StageCard` (display panel) the exact text, links, and details it needs to show for that particular stage.
*   **Consistent Look:** It makes sure every stage is presented in the same neat format – title at the top, details below, links organized.
*   **Shows Who's Responsible:** It displays a small icon indicating if the step is primarily done by a Human (`User` icon), AI (`Bot` icon), or a Human assisted by AI (`UserCog` icon).
*   **Respects Filtering:** If the main director (`ProductProcess`) says "Only show AI-related things!", the `StageCard` checks if it fits that description. If not, it simply doesn't show up.

## What `StageCard` Needs (Props)

To build its display panel, the `StageCard` component needs information from its manager, the `ProcessSection`. This comes in the form of props:

*   `stage`: (Object) This is the most important prop! It's an object containing *all* the data for the single stage this card represents: its unique `id`, `title`, `details` (like comments and resources), and `responsibles` (who performs the task). We'll explore this data structure in [Chapter 4: Product Process Data Structure](04_product_process_data_structure_.md).
*   `filter`: (Text or `null`) This tells the card if a filter is currently active (e.g., `"IA"`, `"Humano"`) or not (`null`). It gets this from `ProcessSection`, which gets it from `ProductProcess`.

## How `ProcessSection` Uses `StageCard`

Remember how `ProcessSection` displays its stages when expanded? It doesn't draw each card itself. Instead, it loops through its list of stages (after filtering) and creates a `StageCard` component for each one, passing the necessary props.

Let's look inside `components/process-section.tsx` again, focusing on the part where `StageCard`s are created:

```typescript
// File: components/process-section.tsx (Simplified Rendering Part)

// (Inside the ProcessSection component, when isExpanded is true)

// Assume 'filteredStages' is an array of stage objects
// like [{ id: 1, title: 'Stage A', ... }, { id: 2, title: 'Stage B', ... }]

<div className="overflow-x-auto pb-4 min-w-0">
  <div className="flex gap-4" style={{ minWidth: "max-content" }}>
    {/* Loop through each stage object in the filtered list */}
    {filteredStages.map((stage: any) => (
      // For each stage, create a StageCard
      <StageCard
        key={stage.id} // A unique key for React lists
        stage={stage}    // Pass the *entire stage object* as a prop
        filter={filter}  // Pass the *current filter* as a prop
      />
    ))}
  </div>
</div>
```

**Explanation:**

1.  **`filteredStages.map(...)`**: This JavaScript function goes through each `stage` object in the `filteredStages` array.
2.  **`<StageCard ... />`**: For every `stage` object it finds, it creates an instance of the `StageCard` component.
3.  **`key={stage.id}`**: This is a special prop React needs when creating lists of components to keep track of them efficiently. We use the stage's unique `id`.
4.  **`stage={stage}`**: This is crucial! It passes the *entire data object* for the current stage (containing title, details, responsibles, etc.) down to the `StageCard` component via the `stage` prop.
5.  **`filter={filter}`**: It also passes down the `filter` value that `ProcessSection` received from `ProductProcess`. The `StageCard` will use this to decide if it should actually render itself.

## Inside `StageCard`: Building the Display

Now, let's imagine what the `StageCard` component (in `components/stage-card.tsx`) does when it receives its `stage` data and the `filter` value.

1.  **Receive Props:** It gets the `stage` object and the `filter` string (or `null`).
2.  **Check Filter:** It looks at the `filter` prop and the `stage.responsibles` data. If a `filter` is active (e.g., "IA") and this stage's primary responsible party *doesn't* match the filter, the component immediately stops and renders nothing (`return null`). This is how filtering works at the card level. (More details in [Chapter 5: Filtering Logic](05_filtering_logic_.md)).
3.  **Determine Icon:** It looks at the first entry in the `stage.responsibles` array (e.g., "Humano", "IA") to decide which icon to show (User, Bot, or UserCog).
4.  **Render Card Shell:** It creates the main container `div` with styling (border, background, shadow) to make it look like a card. It sets a fixed width and height.
5.  **Render Header:** It creates a header section within the card:
    *   Displays the chosen icon (Human, AI, Human+AI).
    *   Displays the `stage.title`. It uses a tooltip so if the title is too long, the user can hover to see the full text.
6.  **Render Body:** It creates a body section below the header:
    *   Makes this area scrollable vertically (`overflow-y-auto`) in case the content is long.
    *   Displays the `stage.details.comment` if it exists.
    *   Checks if `stage.details.resources` exists and is a list. If yes:
        *   It loops through each resource category (like "Tools" or "Examples").
        *   For each category, it displays the resource `title`.
        *   It then loops through the `items` within that resource category.
        *   For each `item`, it displays its `name`. If the item has a `url`, it makes the name a clickable link.

## A Peek at the `StageCard` Code

Here's a simplified version of the code in `components/stage-card.tsx`:

```typescript
// File: components/stage-card.tsx (Simplified)
"use client"

import { User, Bot, UserCog } from "lucide-react" // Icons
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip" // Tooltip component

// Define the expected props
interface StageCardProps {
  stage: any // Object with stage details (title, details, responsibles)
  filter: string | null // Active filter ("IA", "Humano", null)
}

export function StageCard({ stage, filter }: StageCardProps) {
  // Function to get the right icon based on the responsible party
  const getResponsibleIcon = (responsible: string) => {
    switch (responsible.toLowerCase()) {
      case "humano": return <User className="w-5 h-5" />
      case "ia": return <Bot className="w-5 h-5" />
      case "humano com assistência de ia": return <UserCog className="w-5 h-5" />
      default: return null
    }
  }

  // Get the primary responsible party (e.g., "IA", "Humano")
  const primaryResponsible = stage.responsibles?.[0]?.toLowerCase()

  // --- Filtering Logic ---
  // If there's an active filter AND this card doesn't match, render nothing.
  if (filter && primaryResponsible !== filter.toLowerCase()) {
    return null // Don't show this card
  }
  // --- End Filtering Logic ---

  // If the card should be shown, render its content:
  return (
    // The card container with styling
    <div className="border-2 border-black rounded-lg bg-white ..." style={{ width: "300px", height: "400px" }}>
      {/* Card Header */}
      <div className="p-3 font-bold text-lg flex items-center gap-2 border-b-2 border-black">
        {/* Show the icon if a responsible party exists */}
        {primaryResponsible && (
          <div className="flex items-center justify-center w-6 h-6 bg-black text-white rounded-full">
            {getResponsibleIcon(primaryResponsible)}
          </div>
        )}
        {/* Show the title with a tooltip */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild><span className="truncate cursor-help">{stage.title}</span></TooltipTrigger>
            <TooltipContent>{stage.title}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Card Body (Scrollable) */}
      <div className="p-4 pb-9 overflow-y-auto" style={{ height: "calc(400px - 50px)" }}>
        {/* Show comment if available */}
        {stage.details?.comment && (
          <p className="text-sm mb-4">{stage.details.comment}</p>
        )}

        {/* Show resources if available */}
        {stage.details?.resources?.map((resource: any, index: number) => (
          <div key={index} className="mb-4">
            <h4 className="font-bold mb-2">{resource.title}:</h4>
            <ul className="list-disc pl-5 text-sm">
              {resource.items?.map((item: any, itemIndex: number) => (
                <li key={itemIndex} className="mb-1">
                  {/* Make item a link if URL exists */}
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                      {item.name}
                    </a>
                  ) : (
                    item.name
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
```

**Explanation:**

1.  **Props:** Receives `stage` (the data) and `filter`.
2.  **`getResponsibleIcon`:** A helper function maps the responsible string (like "ia") to the correct icon component (`<Bot />`).
3.  **Filter Check:** The `if (filter && ...)` block implements the filtering. If this condition is true, the function returns `null`, preventing the card from being rendered.
4.  **Main `div`:** Defines the card's appearance (border, background, size).
5.  **Header `div`:** Contains the icon (fetched using `getResponsibleIcon`) and the `stage.title` wrapped in a `Tooltip` for potentially long titles.
6.  **Body `div`:**
    *   Set to scroll vertically (`overflow-y-auto`) with a calculated height to fit within the card.
    *   Conditionally renders the `stage.details.comment`.
    *   Conditionally maps over `stage.details.resources`, then maps over `resource.items` to create nested lists of links or plain text items. The `?.` (optional chaining) prevents errors if `details` or `resources` don't exist.

## Conclusion

The `StageCard` is the final piece in displaying the core process steps. It acts like an individual display panel, taking data for a single stage (`stage` prop) and rendering it in a consistent, styled format. It includes the title, details, resources, and a visual indicator of who is primarily responsible (Human, AI, or Human+AI). Crucially, it also respects the application's filtering state (`filter` prop), hiding itself if it doesn't match the active filter.

We've seen how `ProductProcess` organizes `ProcessSection`s, and how `ProcessSection`s organize `StageCard`s. But where does all the information displayed in the `StageCard`s actually come from? In the next chapter, we'll dive into the data itself: [Product Process Data Structure](04_product_process_data_structure_.md).

---

Generated by [AI Codebase Knowledge Builder](https://github.com/The-Pocket/Tutorial-Codebase-Knowledge)
import { format, addDays } from "date-fns";
import calendorIcon from "../images/calendorIcon.png";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function DatePicker({ date, setDate }) {
  return (
    <Popover className="h-auto">
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-60 h-auto justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <img src={calendorIcon} className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          disabled={(date) => date < addDays(new Date(), 1)}
        />
      </PopoverContent>
    </Popover>
  );
}

// export default DatePicker;

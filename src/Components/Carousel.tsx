import {
  Children,
  cloneElement,
  FC,
  HTMLAttributes,
  isValidElement,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { cn } from "@/Types/cn";

interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  heigth: string;
  width?: string;
  previousIcon: ReactElement;
  nextIcon: ReactElement;
  autoplay?: boolean;
  indicators?: boolean;
  buttons?: boolean;
  time?: number;
  cycleNavigation?: boolean;
  classNameContainer?: string;
  classNameIcons?: string;
  onChangeItem?: (index: number) => void;
}

export const Carousel: FC<CarouselProps> = ({
  children,
  heigth,
  width,
  previousIcon,
  nextIcon,
  autoplay = false,
  indicators = true,
  buttons = false,
  time = 3000,
  cycleNavigation = true,
  className,
  classNameContainer,
  classNameIcons,
  onChangeItem,
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [onHover, setOnHover] = useState<boolean>(buttons);
  const totalChildren = Children.count(children);

  useEffect(() => {
    if (onChangeItem) {
      onChangeItem(currentIndex);
    }
  }, [currentIndex, onChangeItem]);

  const goToPreviousCycle = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalChildren - 1 : prevIndex - 1
    );
  };

  const goToNextCycle = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalChildren);
  }, [totalChildren]);

  const goToNext = useCallback(() => {
    setCurrentIndex((previndex) =>
      previndex < totalChildren - 1 ? previndex + 1 : previndex
    );
  }, [totalChildren]);

  const goToPrevious = () => {
    if (currentIndex > 0 || currentIndex == totalChildren) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoplay) {
      interval = setInterval(() => {
        if (cycleNavigation) {
          goToNextCycle();
        } else {
          goToNext();
        }
      }, time);
    }

    return () => clearInterval(interval);
  }, [autoplay, time, cycleNavigation, goToNext, goToNextCycle]);

  return (
    <section className={classNameContainer} {...props}>
      <article
        className={cn(
          `relative flex items-center justify-between select-none`,
          className
        )}
        style={{ height: heigth, width: width }}
        onMouseEnter={() => {
          setOnHover(true);
        }}
        onMouseLeave={() => {
          if (!buttons) {
            setOnHover(false);
          }
        }}
      >
        {onHover && (
          <div
            className={cn(
              "z-[100] p-1 backdrop-blur-3xl bg-slate-400 rounded-lg ml-2 cursor-pointer",
              classNameIcons
            )}
            onClick={cycleNavigation ? goToPreviousCycle : goToPrevious}
          >
            {previousIcon && previousIcon}
          </div>
        )}

        {Children.map(children, (child, index) => {
          if (isValidElement(child)) {
            return cloneElement(
              child as ReactElement<HTMLAttributes<ReactNode>>,
              {
                className: cn(
                  "absolute w-auto px-12 mt-12",
                  child.props.className
                ),
                style: {
                  height: heigth,
                  width: width,
                  zIndex: index === currentIndex ? 10 : 0,
                  opacity: index === currentIndex ? 1 : 0,
                  transition: "opacity 0.5s ease",
                },
              }
            );
          }
          return child;
        })}

        {onHover && (
          <div
            className={cn(
              "z-[100] p-1 backdrop-blur-3xl bg-slate-400 rounded-lg ml-2 cursor-pointer",
              classNameIcons
            )}
            onClick={cycleNavigation ? goToNextCycle : goToNext}
          >
            {nextIcon && nextIcon}
          </div>
        )}
      </article>

      {indicators && (
        <div
          className="flex justify-center gap-x-4 mt-2"
          style={{ width: width }}
        >
          {[...Array(Children.count(children))].map((index) => {
            return (
              <div
                className={cn(
                  "w-3 h-3 rounded-full",
                  index === currentIndex ? "bg-slate-800" : "bg-slate-500"
                )}
                key={index}
              ></div>
            );
          })}
        </div>
      )}
    </section>
  );
};

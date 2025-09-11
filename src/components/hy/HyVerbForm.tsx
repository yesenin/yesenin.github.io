import { useState } from "react";

function HyVerbForm() {
    const [currentTab, setCurrentTab] = useState(0);

    const onNext = (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentTab((prev) => Math.min(prev + 1, 3));
    };

    const onPrev = (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentTab((prev) => Math.max(prev - 1, 0));
    };

    return (
        <form>
            {currentTab === 0 && (
                <HyVerbFormTab name="Настройка">
                    <h2>Первая страница</h2>
                    <input type="text" />
                </HyVerbFormTab>
            )}
            {currentTab === 1 && (
                <HyVerbFormTab name="Формы 1">
                    <h2>Вторая страница</h2>
                    <input type="text" />
                </HyVerbFormTab>
            )}
            {currentTab === 2 && (
                <HyVerbFormTab name="Формы 2">
                    <h2>Третья страница</h2>
                    <input type="text" />
                </HyVerbFormTab>
            )}
            {currentTab === 3 && (
                <HyVerbFormTab name="Формы 3">
                    <h2>Четвертая страница</h2>
                    <input type="text" />
                </HyVerbFormTab>
            )}
            <div>
                <button onClick={onPrev}>Назад</button>
                <button onClick={onNext}>Далее</button>
            </div>
        </form>
    );
}

interface HyVerbFormTabProps {
    name: string;
    children: React.ReactNode;
}

function HyVerbFormTab({ name, children }: HyVerbFormTabProps) {
    return (
        <div>
            <h3>{name}</h3>
            {children}
        </div>
    );
}

export default HyVerbForm;
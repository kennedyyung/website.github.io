import React, {useState, useEffect} from "react";

const Typing =({text, delay = 100}) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timer = setTimeout(() => {
                setCurrentText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, delay);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, text, delay]);

    return <span>{currentText}</span>;

};

export default Typing;
import { useState } from 'react';
import Message from '../message';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState<string>('');
  const [type, setType] = useState<'success' | 'error' | 'info'>('info');

  const counterMaxMessage = "Atingiu o valor máximo"
  const counterMinMessage = "Atingiu o valor mínimo"
  const counterAverageMessage = "Valor dentro dos limites"

  const handleIncrementCounter = () => {
    setCounter(prev => {
      const newValue = prev + 1;

      if (newValue >= 10) {
        setMessage(counterMaxMessage);
        setType('success');
      }
      else {
        setMessage(counterAverageMessage);
        setType('info');
      }

      return newValue > 10 ? prev : newValue;
    })
  }

  const handleDecrementCounter = () => {
    setCounter(prev => {
      const newValue = prev - 1;

      if (newValue <= 0) {
        setMessage(counterMinMessage);
        setType('error');
      }
      else {
        setMessage(counterAverageMessage);
        setType('info');
      }

      return newValue < 0 ? prev : newValue;
    })
  }

  return <>
    <div>{counter}</div>

    <div>
      <button onClick={handleIncrementCounter}>+</button>
      <button onClick={handleDecrementCounter}>-</button>
    </div>

    <div>
      <Message message={message} type={type} />
    </div>
  </>
}

export default Counter;

import React from 'react';
import {VFC, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

export const Counter: VFC = () => {
    let [counter, setCount] = useState(0)
    const increment = () => setCount((c) => c + 1) 
    const reset = () => setCount(0)
    return (
        <>
          <Card>
              <CardContent>
                  {counter}
              </CardContent>
              <CardActions>
                  <Button onClick={increment}>+1</Button>
                  <Button onClick={reset} >reser</Button>
              </CardActions>
          </Card>
        </>
    )
}
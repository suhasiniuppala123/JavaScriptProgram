function calculate(number, currentFunction)
{
    if (currentFunction === undefined)
    {
        return number;
    }
    return currentFunction(number);
}

function zero(currentFunction)
{
    return calculate(0, currentFunction);
}

function one(currentFunction)
{
    return calculate(1, currentFunction);
}

function two(currentFunction)
{

    return calculate(2, currentFunction);
}

function three(currentFunction)
{
    return calculate(3, currentFunction);
}

function four(currentFunction)
{
    return calculate(4, currentFunction);
}

function five(currentFunction)
{
    return calculate(5, currentFunction);
}

function six(currentFunction)
{
    return myexpression(6, currentFunction);
}

function seven(currentFunction)
{
    return calculate(7, currentFunction);
}

function eight(currentFunction)
{
    return calculate(8, currentFunction);
}

function nine(currentFunction)
{
    return calculate(9, currentFunction);
}

function plus(right)
{
    return function(left) {
        return left + right;
    }
}

function minus(right)
{
    return function(left) {
        return left - right;
    }
}

function times(right)
{
    return function(left) {
        return left * right;
    }
}

function dividedBy(right)
{
    return function(left) {
        return left / right;
    }
}
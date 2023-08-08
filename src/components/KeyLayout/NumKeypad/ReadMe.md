# 키패드 작성 중 발생한 오류

```javascript
    useEffect(() => {
        const shuffledSVG = buttons.numpad.flat(1);
        const newPadNumber = [...padNumber];

        SVG_HTMLS.map((svg, value) => {
            for (let i = 0; i < shuffledSVG.length; i++) {
                if (svg === shuffledSVG[i]) {
                    newPadNumber[i] = value + 1;
                    break;
                }
            }
        })

        setPadNumber(newPadNumber);

        let index = 0;
        document.querySelectorAll(".key-pad-buttons").forEach((node: HTMLElement) => {
            padPosition[index] = [node.offsetLeft, node.offsetTop];
            index += 1
        })
        setPadPosition(padPosition);
    }, [triggerState.trigger])
```

```javascript
    useEffect(() => {
        document.querySelectorAll("div.pads-num-buttons button").forEach(button => {
            const svg: any = button.childNodes[0];

            let index = svg.attributes[3].nodeValue;
            switch (index) {
                case ("shuffle"):
                    index = 10
                    break;

                case ("blank"):
                    index = 11
                    break;
                default:
                    index = Number(index)
                    break;
            }
            padPosition[index] = button.getClientRects()[0];
            setPadPosition([...padPosition])
        })
    }, [insertDataState.data])
```

보안을 위한 키보드 작성을 위하여 button 자체에 값을 부여하기 보다는 컴포넌트가 로드되면 그 로드된 컴포넌트의 offsetleft, offsetTop 과 같이 지정되는 각각의 컴포넌트 위치에서 마우스가 click되거나 down 될 경우 그 위치를 기반으로 생성된 svg의 value 값을 계산하여 그 값들을 input value로 전달하고자 했다. 하지만 testing-library에서는 getClientRects()나 offsetLeft, offsetTop과 같이 로드 되었을 경우 screen 값을 기반으로 하는 값들은 원하는 대로 로드되지 않고 0, null로 값을 전달하는 오류가 발생한다는 것을 발견했다. 그래서 test를 통과하기 위해서는 screen 값이 아닌 자체 값을 전달해야만 했다.
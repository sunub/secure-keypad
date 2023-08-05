import React from "react"
import userEvent from "@testing-library/user-event"
import { render, screen, waitFor } from "@testing-library/react"

import { App } from "./test";


async function delay(ms: number) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
}
async function mockConsoleError() {
    const consoleMock = jest.spyOn(console, "error")
    consoleMock.mockImplementation(() => "에러 발생!")

    return consoleMock
}

describe("Studying how do it work", () => {
    mockConsoleError()
    afterEach(() => {
        jest.restoreAllMocks();
    });

    test("라벨텍스트 클릭하기", async () => {
        render(<App />)

        userEvent.click(await screen.findByLabelText<HTMLInputElement>(`비밀번호`))

        expect(await screen.findByText(/비밀번호를 입력해주세요/)).toBeInTheDocument
    })

    // test("확인 버튼 클릭시 텍스트 지우기", async () => {
    //     render(<App />)

    //     userEvent.click(await screen.findByLabelText<HTMLInputElement>(`비밀번호`))
    //     expect(await screen.queryByText(/Open/)).toBeInTheDocument

    //     userEvent.click(await screen.findByText("확인"));
    //     await delay(100);
    //     expect(await screen.queryByText(/Open/)).not.toBeInTheDocument
    // })
    // test("body click이 되나?", async () => {
    //     render(<App />)

    //     userEvent.click(document.body)
    //     await delay(100)
    //     expect(await screen.queryByText(/Hi There/)).toBeInTheDocument()
    // })
})  
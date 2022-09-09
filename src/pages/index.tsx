import Image from 'next/image'
import { MagnifyingGlass } from 'phosphor-react'
import payImage from '../assets/pay.png'
import transferImage from '../assets/transfer.png'
import receiveImage from '../assets/receive.png'
import { useState } from 'react'

export default function Home() {
  const [percentageToInvest, setPercentageToInvest] = useState<number>(10)

  const valueOnAccount = 1600.28

  return (
    <div className="w-screen">
      <div className="max-w-md flex mx-auto my-24 max-h-[896px]">
        <div className="w-full h-full shadow-xl rounded-xl bg-gray100 px-16 py-16 text-gray500">
          <h1 className="font-logo text-3xl font-bold text-center">
            CryptoTap
          </h1>
          <div className="flex-col space-y-8 font-rob text-2xl">
            <section className="mt-12">
              <h1 className="font-soft text-2xl">Olá, Sabrina</h1>
              <div className="flex gap-x-8 mt-10">
                <div className="flex-col items-center">
                  <div className="w-[72px] h-[72px] flex justify-center items-center rounded-full bg-gradient-to-b from-aquaForGradient to-aqua700 hover:scale-105 transition duration-500 cursor-pointer">
                    <Image
                      src={payImage}
                      alt="ícone de duas mãos segurando uma moeda"
                    />
                  </div>
                  <p className="font-medium text-[15px] text-center">Pagar</p>
                </div>
                <div className="flex-col items-center">
                  <div className="w-[72px] h-[72px] flex justify-center items-center rounded-full bg-gradient-to-b from-aquaForGradient to-aqua700 hover:scale-105 transition duration-500 cursor-pointer">
                    <Image src={receiveImage} alt="ícone de uma carteira" />
                  </div>
                  <p className="font-medium text-[15px] text-center">Receber</p>
                </div>
                <div className="flex-col items-center">
                  <div className="w-[72px] h-[72px] flex justify-center items-center rounded-full bg-gradient-to-b from-aquaForGradient to-aqua700 hover:scale-105 transition duration-500 cursor-pointer">
                    <Image
                      src={transferImage}
                      alt="ícone de duas moedas com setas em volta"
                    />
                  </div>
                  <p className="font-medium text-[15px] text-center">
                    Transferir
                  </p>
                </div>
              </div>
            </section>
            <section className="font-medium text-2xl">
              <h1 className="font-thin">Saldo</h1>
              <div className="mt-3 flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <div className="w-4 h-5 rounded-sm bg-aqua700">
                    {/* quadrado colorido */}
                  </div>
                  <span>R$ {valueOnAccount.toString()}</span>
                </div>
                <p className="text-green500 text-xs font-regular">307,20 USD</p>
              </div>
            </section>
            <section className="font-medium text-2xl">
              <h1 className="font-thin">Poupar</h1>
              <div className="mt-3">
                <input
                  id="range"
                  // className="w-full h-5 bg-aqua700 rounded-md appearance-none"
                  type="range"
                  max={100}
                  min={10}
                  step={1}
                  value={percentageToInvest}
                  onChange={(e) =>
                    setPercentageToInvest(Number(e.target.value))
                  }
                />
                <div className="flex items-center justify-between font-thin text-sm">
                  <span>10%</span>
                  <span className="text-lg text-aqua700">
                    {percentageToInvest}
                  </span>
                  <span>100%</span>
                </div>
              </div>
              <div className="flex justify-between mt-4 items-center">
                <div className="flex items-start gap-x-2">
                  <div className="w-4 h-5 rounded-sm bg-aqua500 mt-px">
                    {/* quadrado colorido */}
                  </div>
                  <div className="flex-col leading-none">
                    <span>
                      R${' '}
                      {(valueOnAccount * (percentageToInvest / 100)).toFixed(2)}
                    </span>
                    <p className="text-xs font-regular">30,70 USD</p>
                  </div>
                </div>
                <p className="text-green500 text-xs font-regular">8% a.a.</p>
              </div>
            </section>
            <section className="font-medium text-2xl">
              <h1 className="font-thin">Extrato</h1>
              <div className="mt-3 bg-gray300 flex items-center px-3 gap-2 w-full border border-transparent rounded-md hover:bg-gray400 transition duration-500 focus:border-aqua500 group">
                <MagnifyingGlass size={24} />
                <input
                  placeholder="Buscar"
                  className="placeholder:text-sm text-sm w-full py-2 rounded-md hover:bg-gray400 bg-gray300 focus:outline-none transition duration-500"
                  type="text"
                />
              </div>
              <div className="mt-6 text-sm max-h-[160px] overflow-y-scroll scroll-m-24 flex-col space-y-4">
                <div className="flex justify-between">
                  <span>Rendimento</span>
                  <div>
                    <strong className="text-gray500">R$1,07</strong>
                    <p className="text-xs text-gray400">0,20 USD</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>Comunidade</span>
                  <div>
                    <strong className="text-gray500">R$0,10</strong>
                    <p className="text-xs text-gray400">0,02 USD</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>DAO</span>
                  <div>
                    <strong className="text-gray500">R$0,10</strong>
                    <p className="text-xs text-gray400">0,02 USD</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>Scroll Test</span>
                  <div>
                    <strong className="text-gray500">R$0,10</strong>
                    <p className="text-xs text-gray400">0,02 USD</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

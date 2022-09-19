import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Check, GameController } from 'phosphor-react';
import { Input } from '../components/Form/Input';
import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';

interface Game {
    id: string,
    title: string,
}

export function CreateAdModal() {
const [games, setGames] = useState<Game[]>([]);
const [weekDays, setWeekDays] = useState<string[]>([]);
const [useVoiceChannel, setUseVoiceChannel] = useState(false);

 useEffect(() => {
    axios('http://localhost:3333/games').then(response =>  setGames(response.data))
})

async function handleCreateAd(event: FormEvent) {
  event.preventDefault();
  
  const formData = new FormData(event.target as HTMLFormElement);
  const data = Object.fromEntries(formData);

  if (!data.name) {
    return;
  }
  
 try {
    axios.post(`http://localhost:3333/games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yeasPlaying),
        weekDays: weekDays.map(Number),
        discord: data.discord,
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel: useVoiceChannel,
  })
  alert('Anúncio criado com sucesso!')
 } catch (error) {
    console.log(error)
    alert('Erro ao criar o anúncio!')
 }
}

  return (
    <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
          <Dialog.Title className="text-3xl font-black">Publique um anúncio</Dialog.Title>
            <form 
              className="mt-8 flex flex-col gap-4"
              onSubmit={handleCreateAd}
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">Qual o game?</label>
                <select
                  className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
                  id="game"
                  name="game"
                  defaultValue=""
                >
                  <option disabled value="">Selecione o game que deseja jogar</option>
                  {
                    games.map((game) => (
                      <option value={game.id} key={game.id}>{game.title}</option>
                    ))
                  }
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold">Seu nome (ou nickname)</label>
                <Input
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Como te chamam dentro do game?"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yeasPlaying" className="font-semibold">Joga há quantos anos?</label>
                  <Input id="yeasPlaying" type="number" placeholder="Tudo bem ser ZERO" name="yeasPlaying"/>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="discord" className="font-semibold">Qual seu Discord?</label>
                  <Input id="discord" type="text" placeholder="Usuario#0000" name="discord" />
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weekDays" className="font-semibold">Quando costuma jogar?</label>
                    <ToggleGroup.Root
                      type="multiple"
                      className="grid grid-cols-4 gap-2"
                      value={weekDays}
                      onValueChange={setWeekDays}
                      >
                        <ToggleGroup.Item
                          className={`w-8 h-8 rounded ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                          title="Domingo"
                          value="0"
                        >
                          D
                        </ToggleGroup.Item>
                        <ToggleGroup.Item className={`w-8 h-8 rounded ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`} title="Segunda"
                        value="1">S</ToggleGroup.Item>
                        <ToggleGroup.Item className={`w-8 h-8 rounded ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`} title="Terça"
                        value="2">T</ToggleGroup.Item>
                        <ToggleGroup.Item className={`w-8 h-8 rounded ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`} title="Quarta"
                        value="3">Q</ToggleGroup.Item>
                        <ToggleGroup.Item className={`w-8 h-8 rounded ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`} title="Quinta"
                        value="4">Q</ToggleGroup.Item>
                        <ToggleGroup.Item className={`w-8 h-8 rounded ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`} title="Sexta"
                        value="5">S</ToggleGroup.Item>
                        <ToggleGroup.Item className={`w-8 h-8 rounded ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`} title="Sábado"
                        value="6">S</ToggleGroup.Item>
                    </ToggleGroup.Root>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="hourStart" className="font-semibold">Qual horário do dia?</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input id="hourStart" type="time" placeholder="De" name="hourStart" />
                      <Input id="hourEnd" type="time" placeholder="Até" name="hourEnd"/>
                    </div>
                </div>
              </div>

              <label  className="mt-2 flex gap-2 text-sm items-center">
                <Checkbox.Root className="w-6 h-6 rounded bg-zinc-900 p-1"
                  checked={useVoiceChannel}
                  onCheckedChange={(checked) => {
                    if (checked === true) {
                        setUseVoiceChannel(true);
                    } else {
                        setUseVoiceChannel(false);
                    }
                  }}
                >
                  <Checkbox.Indicator>
                    <Check className="w-4 h-4 text-emerald-400" />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                Costumo me conectar ao chat de voz
              </label>

              <footer className="mt-4 flex justify-center gap-4">
                <Dialog.Close
                  type="button"
                  className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
                >
                  Cancelar
                </Dialog.Close>
                <button
                  type="submit"
                  className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                >
                  <GameController className="w-6 h-6" /> 
                    Encontrar duo
                </button>
              </footer>

            </form>
        </Dialog.Content>
      </Dialog.Portal>
  )
}
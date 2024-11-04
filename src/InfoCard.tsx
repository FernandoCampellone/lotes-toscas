import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card"
import { Label } from "./components/ui/label"
import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"
 

 export default function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Las Toscas</CardTitle>
        <CardDescription>Información de la propiedad</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className=" flex flex-row justify-between">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Manzana</Label>
                <Input className="w-12 text-center" id="name" placeholder="6" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Lote</Label>
                <Input className="w-12 text-center" id="name" placeholder="1" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Fracción</Label>
                <Input className="w-12 text-center" id="name" placeholder="A" />
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Propietario</Label>
              <Input id="name" placeholder="Matías Lor" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Teléfono Propietario</Label>
              <Input id="name" placeholder="3513408488" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Inquilino</Label>
              <Input id="name" placeholder="Fernando Campellone" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Teléfono Inquilino</Label>
              <Input id="name" placeholder="3515509599" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button variant="outline">Cerrar</Button>
      </CardFooter>
    </Card>
  )
}
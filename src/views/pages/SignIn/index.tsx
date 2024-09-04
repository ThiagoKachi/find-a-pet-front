import { Button } from '@/views/components/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/views/components/Card';
import { Input } from '@/views/components/Input';
import { Label } from '@/views/components/Label';

export function SignIn() {
  return (
    <div className="flex items-center justify-center h-screen -mt-10">
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Cadastro de ORG</CardTitle>
          <CardDescription>Por favor, preencha o formulário abaixo.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Senha</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Confirmar Senha</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>

            </div>
            <div className="grid gap-2">
              <Label htmlFor="name">Nome da ORG</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address">Endereço</Label>
              <Input id="address" placeholder="Enter your address" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="city">Cidade</Label>
                <Input id="city" placeholder="Enter your city" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="state">Estado</Label>
                <Input id="state" placeholder="Enter your state" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="zipcode">CEP</Label>
                <Input id="zipcode" placeholder="Enter your zipcode" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" />
              </div>
            </div>
            <Button type="submit" className="w-full">
            Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>

  );
}

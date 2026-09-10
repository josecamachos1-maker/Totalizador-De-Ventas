class Totalizador
{
    PrecioNeto(Pproducto, Cantidad) 
    {
        let Neto = Pproducto * Cantidad
        return Neto;
        
    }

    Impuesto(Codigo, Neto)
    {
        let tasa = 0;
        
        if(Codigo == "UT")
        {
            tasa = 0.0665;
        }

        return tasa * Neto;
    }

}
export {Totalizador}
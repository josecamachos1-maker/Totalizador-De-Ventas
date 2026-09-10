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
        if(Codigo == "NV")
        {
            tasa = 0.08;
        }
        if(Codigo == "TX")
        {
            tasa = 0.0625
        }
        if(Codigo == "AL")
        {
            tasa = 0.04
        }
        if(Codigo == "CA")
        {
            tasa = 0.0825
        }

        return tasa * Neto;
    }

}
export {Totalizador}
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

    Descuento(Neto)
    {

    let descuento = 0;

    if(Neto >= 1000)
    {
        descuento = 0.03;
    }
    if(Neto >= 3000)
    {
        descuento = 0.05;
    }

    if(Neto >= 7000)
    {
        descuento = 0.07;
    }
    if(Neto >= 10000)
    {
        descuento = 0.10;
    }
    if(Neto >= 30000)
    {
        descuento = 0.15;
    }

    return Number((Neto * descuento).toFixed(2));
    }

    PrecioTotal(Neto, Descuento, Impuesto)
    {
        return Number((Neto - Descuento + Impuesto).toFixed(2));
    }

    ValidarDatos(precio, cantidad)
    {

    if(Number.isNaN(precio) || Number.isNaN(cantidad))
    {
        return false;
    }

    return true;
    }
    PuedeConfirmar(precio, cantidad)
    {
        if(precio > 0 && cantidad > 0)
        {
            return true;
        }

        return false;
    }

    DescuentoCategoria(Categoria, Neto)
    {
        let descuento = 0;

        if(Categoria == "Alimentos")
        {
            descuento = 0.02;
        }    
        if(Categoria == "Material de escritorio")
        {
            descuento = 0.015;
        }
        if(Categoria == "Electronicos")
        {
            descuento = 0.01;
        }

        return Number((Neto * descuento).toFixed(2));
        
    }
    ImpuestoCategoria(Categoria, Neto)
    {
        let impuesto = 0;

        if(Categoria == "Bebidas alcoholicas")
        {
            impuesto = 0.07;
        }
        if(Categoria == "Muebles")
        {
            impuesto = 0.03;
        }
        if(Categoria == "Electronicos")
        {
            impuesto = 0.04;
        }
        if(Categoria == "Vestimenta")
        {
            impuesto = 0.02;
        }

        return Number((Neto * impuesto).toFixed(2));
    }

    CostoEnvio(Peso)
{
    if(Peso < 0)
    {
        return 0;
    }

    if(Peso <= 10)
    {
        return 0;
    }

    if(Peso <= 20)
    {
        return 3.5;
    }

    if(Peso <= 40)
    {
        return 5;
    }

    if(Peso <= 80)
    {
        return 6;
    }

    if(Peso <= 100)
    {
        return 6.5;
    }

    if(Peso <= 200)
    {
        return 8;
    }

    return 9;
}
CostoEnvioTotal(Cantidad, CostoUnidad)
{
    return Number((Cantidad * CostoUnidad).toFixed(2));
}
DescuentoEnvioCliente(TipoCliente, CostoEnvio)
{
    let descuento = 0;

    if(TipoCliente == "Recurrente")
    {
        descuento = 0.005;
    }

    if(TipoCliente == "Antiguo Recurrente")
{
    descuento = 0.01;
}

    return Number((CostoEnvio * descuento).toFixed(2));
}
    

}
export {Totalizador}




function updateCacheDynamic( dynamicCache, req , resp ){

    if( resp.ok ){
        return caches.open( dynamicCache ).then( cache => { 

            cache.put( req, resp.clone() );
            
            return resp.clone();

        });
    }else{
        // restornar la respuesta, no hay respuesta por error de conexion o recurso...
        return resp;
    }
};
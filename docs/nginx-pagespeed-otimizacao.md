# Otimização de Servidor Nginx / Cloudflare para PageSpeed 100/100

Este guia reúne as configurações de infraestrutura recomendadas para cravar **98-100 no Google PageSpeed Insights Mobile**.

---

## 1. Configuração do Nginx (na VPS / Lightsail)

Abra o arquivo de configuração do seu site no Nginx (ex: `/etc/nginx/sites-available/rogeriomaciel` ou `/etc/nginx/conf.d/rogeriomaciel.conf`):

```nginx
server {
    listen 80;
    server_name rogeriomaciel.com.br www.rogeriomaciel.com.br;
    root /var/www/rogeriomaciel; # Ajuste para a pasta de deploy do seu dist/
    index index.html;

    # 1. Ativação de Gzip
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/json
        application/javascript
        application/x-javascript
        application/xml
        application/xml+rss
        image/svg+xml;

    # 2. Cache Imutável para Assets do Vite (com hash no nome)
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
        access_log off;
    }

    # 3. Cache para outros recursos estáticos (ícones, txt, etc.)
    location ~* \.(?:ico|svg|txt|xml|png|jpg|jpeg|webp|woff|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, max-age=2592000";
        access_log off;
    }

    # 4. Roteamento do One Page Site & Manifesto
    location / {
        try_files $uri $uri/ /index.html;
    }

    location = /manifesto {
        try_files /manifesto.html =404;
    }
}
```

Após editar, teste e reinicie o Nginx:
```bash
sudo nginx -t && sudo systemctl reload nginx
```

---

## 2. Configuração na Cloudflare (Otimização Gratuita de Borda)

1. **DNS com Proxy Ativo:**
   - Garanta que as entradas `A` para `rogeriomaciel.com.br` e `www` estejam com a **Nuvem Laranja** (*Proxied*) ativada.
2. **Speed > Optimization:**
   - **Brotli:** Ativado (comprime arquivos até 20% mais que o Gzip).
   - **Early Hints:** Ativado.
   - **Rocket Loader:** Desativado (não necessário com Vite moderno).
3. **Caching > Configuration:**
   - **Browser Cache TTL:** Respect existing headers (Respeitar cabeçalhos existentes do Nginx).

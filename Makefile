.PHONY: nginx
nginx:
	envsubst '$$SERVER_NAME $$SSL_CERTIFICATE $$SSL_CERTIFICATE_KEY' < nginx/nginx.conf.tmpl > nginx/nginx.conf

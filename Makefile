.PHONY: nginx
nginx:
	envsubst '$$SSL_CERTIFICATE $$SSL_CERTIFICATE_KEY' < nginx/nginx.conf.tmpl > nginx/nginx.conf

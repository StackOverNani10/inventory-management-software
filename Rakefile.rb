# Rakefile

require 'rake'

# Tarea para limpiar archivos temporales
task :clean do
  puts "Limpiando archivos temporales..."
  sh "rm -rf tmp/"
end

# Tarea para desplegar la aplicación
task :deploy => [:clean] do
  puts "Desplegando la aplicación en GitHub Pages..."
  
  # Cambia a la rama que deseas desplegar (asegúrate de ajustar el nombre de la rama)
  sh "git checkout master"
  
  # Asegúrate de tener cambios para hacer push (podrías ajustar esto según tu flujo de trabajo)
  sh "git add -A"
  sh "git commit -m 'Actualizando para despliegue'"
  
  # Realiza el push
  sh "git push origin master"
end

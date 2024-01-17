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

  # Asegúrate de estar en la rama correcta (ajusta el nombre de la rama si es necesario)
  sh "git checkout master"

  # Verifica si hay cambios antes de intentar realizar el commit
  unless `git status --porcelain`.empty?
    # Asegúrate de tener cambios para hacer push (ajusta según tu flujo de trabajo)
    sh "git add -A"
    sh "git commit -m 'Actualizando para despliegue'"
  
    # Realiza el push
    sh "git push origin master"
  else
    puts "No hay cambios para desplegar."
  end
end

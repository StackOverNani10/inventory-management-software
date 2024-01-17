# Tarea para limpiar archivos temporales
task :clean do
  puts "Limpiando archivos temporales..."
  sh "rm -rf tmp/"
end

# Tarea para desplegar la aplicación
task :deploy => [:clean] do
  puts "Desplegando la aplicación en GitHub Pages..."
  sh "git push origin master"
end

rm -rf ~/build-final
meteor build ~/build-final --server=http://teamsport.meteorlab.fr
cd ~/build-final
scp meteoric.tar.gz root@5.196.67.178:/home/teamsport.meteorlab.fr
ssh root@5.196.67.178

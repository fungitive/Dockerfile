FROM python:3.5.5
RUN pip install --upgrade pip
RUN pip install ipython jupyter notebook
RUN ln -s /usr/local/python/bin/jupyter /usr/bin/jupyter
RUN jupyter notebook --generate-config --allow-root
RUN rm /root/.jupyter/jupyter_notebook_config.py
COPY jupyter_notebook_config.py /root/.jupyter/
EXPOSE 8888
CMD ["jupyter", "notebook", "--allow-root"]

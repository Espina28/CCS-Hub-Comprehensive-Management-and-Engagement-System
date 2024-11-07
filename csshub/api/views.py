from django.shortcuts import render, redirect
# from rest_framework import generics
from AdminApp.models import Event
from .serializer import EventPostSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

 
# Create your views here.

# class EventPostCreate(generics.CreateAPIView):
#     queryset = Event.objects.all()
#     serializer_class =  EventPostSerializer 

# class EventRetrieveData(generics.ListAPIView):
#     queryset = Event.objects.all()
#     serializer_class =  EventPostSerializer

# class EventUpdate(generics.UpdateAPIView):
#     queryset = Event.objects.all()
#     serializer_class = EventPostSerializer
#     lookup_field = 'id'


@api_view(['GET'])
def get_events(request):
    print('get get')
    events = Event.objects.all()  # Retrieve all events
    serializer = EventPostSerializer(events, many=True)  # Serialize the events
    return Response(serializer.data)  # Return the serialized event data as a response

@api_view(['POST'])
def create_event(request):  
    if request.method == 'POST':
        serializer = EventPostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            # return Response(serializer.data, status=status.HTTP_201_CREATED)
            return redirect('/control/events-dashboard') 
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['PUT'])
def edit_event(request, event_id):

    try:
        event = Event.objects.get(id=event_id)  # Retrieve the event by ID
    except Event.DoesNotExist:
        return Response({'error': 'Event not found'}, status=status.HTTP_404_NOT_FOUND)

    serializer = EventPostSerializer(event, data=request.data)  #Full update (PUT)
    if serializer.is_valid():
        serializer.save()  # Save the updated event data
        # return Response(serializer.data)  # Return the updated event data
        return redirect('/control/events-dashboard')
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def delete_event(response, event_id):
    try:
        event = Event.objects.get(id=event_id)
    except Event.DoesNotExist:
        return Response({'error': 'Event not found'}, status=status.HTTP_404_NOT_FOUND)

    event.delete()  # Delete the event from the database
    # return Response({'message': 'Event deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
    return redirect('/control/events-dashboard')